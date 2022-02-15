# Tutanota


```text
simpleicons-6/T/Tutanota
```

```text
include('simpleicons-6/T/Tutanota')
```



| Illustration | Tutanota |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/T/Tutanota.png) | ![illustration for Tutanota](../../simpleicons-6/T/Tutanota.Local.png) |




## Tutanota

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Tutanota
include('simpleicons-6/T/Tutanota')

' renders the element
Tutanota('Tutanota', 'Tutanota', 'an optional tech label')
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

' loads the Item which embeds the element Tutanota
include('simpleicons-6/T/Tutanota')

' renders the element
Tutanota('Tutanota', 'Tutanota', 'an optional tech label')
@enduml
```

