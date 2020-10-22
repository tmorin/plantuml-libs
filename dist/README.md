# PlantUML Libs

## Packages

The library provides 7 packages.


- [aws-20200430](aws-20200430/README.md)
- [aws-20200911](aws-20200911/README.md)
- [azure-v2](azure-v2/README.md)
- [c4model](c4model/README.md)
- [eventstorming](eventstorming/README.md)
- [homecloud](homecloud/README.md)
- [material-4.0](material-4.0/README.md)

## Include the library

Include remotely the library:
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/dist"

' loads the library
!include $LIB_BASE_LOCATION/library.puml
@enduml
```

Include locally the library:
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="<the relative path to the /public directory>"

' loads the library
!include $LIB_BASE_LOCATION/library.puml
@enduml
```

## Load element provided by packages

```plantuml
' loads the AwsDataExchange element from the aws-20200911 package
include('aws-20200911/Service/Analytics/AwsDataExchange')
```

## Title

The title of the diagram can be formatted using the procedure:
```plantuml
Title("the title of the diagram", "an optional subtitle", "an optioanl version", "an optional date")
```

## Relationship

The relationships' texts between the diagram's items can be formatted using the procedure:
```plantuml
Relationship("an expected reason of the relationship", "an optional technology")
```
