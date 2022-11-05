# tmorin/plantuml-libs

## Packages

The library provides 12 packages.

- [aws-q2-2022](aws-q2-2022/README.md)
- [azure-6](azure-6/README.md)
- [c4model](c4model/README.md)
- [c4nord](c4nord/README.md)
- [domainstorytelling](domainstorytelling/README.md)
- [eip-1](eip-1/README.md)
- [eventstorming](eventstorming/README.md)
- [fontawesome-6](fontawesome-6/README.md)
- [gcp](gcp/README.md)
- [homecloud-2](homecloud-2/README.md)
- [material-4](material-4/README.md)
- [simpleicons-7](simpleicons-7/README.md)

## Include the library

Include remotely the library:
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
@enduml
```

Include locally the library:
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="<the relative path to the /distribution directory>"

' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
@enduml
```

## include vs !include

When documenting large projects, it's often a good practice to define the components in separate `.puml` files which will be then included in other `.puml` files containing the diagrams to render.
So that, the component definitions can be re-used among the diagrams.

However, be careful about relative and absolute paths with the usage of `!include` (the native PlantUML directive) vs `include()` (a custom procedure provided in this library).
According to where you are (i.e. reference files vs diagram files), the _relative paths_ won't be resolved from the _current directory_.

Given the following file tree, the following snippets should help you to configure files properly.

- project/
  - ref/
    - c4.puml
    - aws.puml
  - src/
    - guidebook/
      - component/
        - c4.puml
        - aws.puml

### project/ref/c4.puml
```plantuml
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../node_modules/@tmorin/plantuml-libs/distribution"
!include $LIB_BASE_LOCATION/bootstrap.puml
include('c4model/bootstrap')
' definition of the common elements below
' .....
```

### project/ref/aws.puml
```plantuml
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../node_modules/@tmorin/plantuml-libs/distribution"
!include $LIB_BASE_LOCATION/bootstrap.puml
include('aws-20200911/bootstrap')
' definition of the common elements below
' .....
```

### project/src/guidebook/component/c4.puml
```plantuml
@startuml level1-system
!include ../../../ref/c4.puml
!global $IMAGE_BASE_PATH="../../" + $LIB_BASE_LOCATION + "/"
!global $LIB_BASE_LOCATION="../../" + $LIB_BASE_LOCATION
' description of the diagram below
' .....
@enduml
```

### project/src/guidebook/component/aws.puml
```plantuml
@startuml infrastructure-production
!include ../../../ref/aws.puml
!global $IMAGE_BASE_PATH="../../" + $LIB_BASE_LOCATION + "/"
!global $LIB_BASE_LOCATION="../../" + $LIB_BASE_LOCATION
' description of the diagram below
' .....
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

