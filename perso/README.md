# Perso

## Include the library

Include remotely the library:
```plantuml
@startuml
' configures the library
!global $LIB_BRANCH="v1.x"
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/" + $LIB_BRANCH + "/perso"

' loads the library
!includeurl $LIB_BASE_LOCATION/library.puml
@enduml
```

Include locally the library:
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../../../"

' loads the library
!include ../../../library.puml
@enduml
```

## Load resources

Additional sub-libraries can be included.

```plantuml
@startuml
include('elements/aws/Analytics/AwsAnalytics')
@enduml
```

## Resources

- `materials` - Material Icons
  - [Elements](documentation/materials/elements.md)
  - [Groups](documentation/materials/groups.md)
- `brand` - Brand
  - [Elements](documentation/brand/elements.md)
  - [Groups](documentation/brand/groups.md)

## Resources

Examples with sources can be reviewed there: [examples](examples.md).
