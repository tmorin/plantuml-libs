# Msi


```text
simpleicons-5/M/Msi
```

```text
include('simpleicons-5/M/Msi')
```



| Illustration | Msi |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/M/Msi.png) | ![illustration for Msi](../../simpleicons-5/M/Msi.Local.png) |




## Msi

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Msi
include('simpleicons-5/M/Msi')

' renders the element
Msi('Msi', 'Msi', 'an optional tech label')
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
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Msi
include('simpleicons-5/M/Msi')

' renders the element
Msi('Msi', 'Msi', 'an optional tech label')
@enduml
```

