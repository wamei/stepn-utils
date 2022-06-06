import { Realm, RealmColor, RealmToken } from "app/models/Realm"
import React, { FC } from "react"
import { ButtonGroup, Col, Row, ToggleButton } from "react-bootstrap"
import Image from "next/image"

type RealmSelectorProps = {
  value: Realm
  onChange(v: Realm): void
}

export const RealmSelector: FC<RealmSelectorProps> = ({ value, onChange }) => {
  return (
    <>
      <ButtonGroup className="mb-2">
        {Object.values(Realm).map((realm) => (
          <ToggleButton
            key={realm}
            id={`radio-realm-${realm}`}
            type="radio"
            variant="light"
            name="radio"
            value={realm}
            checked={value === realm}
            onChange={(e) => onChange(e.currentTarget.value as Realm)}
            style={{
              backgroundColor: value === realm ? RealmColor[realm] : "",
            }}
            className="align-items-center"
          >
            <Row>
              <Col className="pe-1">
                <Image
                  src={`/stepn-utils/${RealmToken[realm].main}.png`}
                  alt={realm}
                  width="20"
                  height="20"
                  objectFit="contain"
                />
              </Col>
              <Col className="ps-0">{realm}</Col>
            </Row>
          </ToggleButton>
        ))}
      </ButtonGroup>
    </>
  )
}
