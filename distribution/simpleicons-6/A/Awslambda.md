# Awslambda


```text
simpleicons-6/A/Awslambda
```

```text
include('simpleicons-6/A/Awslambda')
```



| Illustration | Awslambda |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/A/Awslambda.png) | ![illustration for Awslambda](../../simpleicons-6/A/Awslambda.Local.png) |




## Awslambda

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Awslambda
include('simpleicons-6/A/Awslambda')

' renders the element
Awslambda('Awslambda', 'Awslambda', 'an optional tech label')
@enduml
```

### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../.."

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Awslambda
include('simpleicons-6/A/Awslambda')

' renders the element
Awslambda('Awslambda', 'Awslambda', 'an optional tech label')
@enduml
```

