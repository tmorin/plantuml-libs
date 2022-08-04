# Msi


```text
simpleicons-7/M/Msi
```

```text
include('simpleicons-7/M/Msi')
```



| Illustration | Msi |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/M/Msi.png) | ![illustration for Msi](../../simpleicons-7/M/Msi.Local.png) |




## Msi

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Msi
include('simpleicons-7/M/Msi')

' renders the element
Msi('Msi', 'Msi', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Msi
include('simpleicons-7/M/Msi')

' renders the element
Msi('Msi', 'Msi', 'an optional tech label', 'an optional description')
@enduml
```

