# Kingstontechnology


```text
simpleicons-6/K/Kingstontechnology
```

```text
include('simpleicons-6/K/Kingstontechnology')
```



| Illustration | Kingstontechnology |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/K/Kingstontechnology.png) | ![illustration for Kingstontechnology](../../simpleicons-6/K/Kingstontechnology.Local.png) |




## Kingstontechnology

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Kingstontechnology
include('simpleicons-6/K/Kingstontechnology')

' renders the element
Kingstontechnology('Kingstontechnology', 'Kingstontechnology', 'an optional tech label')
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

' loads the Item which embeds the element Kingstontechnology
include('simpleicons-6/K/Kingstontechnology')

' renders the element
Kingstontechnology('Kingstontechnology', 'Kingstontechnology', 'an optional tech label')
@enduml
```

