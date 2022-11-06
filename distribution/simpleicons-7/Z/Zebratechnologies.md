# Zebratechnologies


```text
simpleicons-7/Z/Zebratechnologies
```

```text
include('simpleicons-7/Z/Zebratechnologies')
```



| Illustration | Zebratechnologies |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/Z/Zebratechnologies.png) | ![illustration for Zebratechnologies](../../simpleicons-7/Z/Zebratechnologies.Local.png) |




## Zebratechnologies

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Zebratechnologies
include('simpleicons-7/Z/Zebratechnologies')

' renders the element
Zebratechnologies('Zebratechnologies', 'Zebratechnologies', 'an optional tech label', 'an optional description')
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
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Zebratechnologies
include('simpleicons-7/Z/Zebratechnologies')

' renders the element
Zebratechnologies('Zebratechnologies', 'Zebratechnologies', 'an optional tech label', 'an optional description')
@enduml
```

