# Junipernetworks


```text
simpleicons-7/J/Junipernetworks
```

```text
include('simpleicons-7/J/Junipernetworks')
```



| Illustration | Junipernetworks |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/J/Junipernetworks.png) | ![illustration for Junipernetworks](../../simpleicons-7/J/Junipernetworks.Local.png) |




## Junipernetworks

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Junipernetworks
include('simpleicons-7/J/Junipernetworks')

' renders the element
Junipernetworks('Junipernetworks', 'Junipernetworks', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Junipernetworks
include('simpleicons-7/J/Junipernetworks')

' renders the element
Junipernetworks('Junipernetworks', 'Junipernetworks', 'an optional tech label', 'an optional description')
@enduml
```

