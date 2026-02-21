# Opensourcehardware


```text
simpleicons-14/O/Opensourcehardware
```

```text
include('simpleicons-14/O/Opensourcehardware')
```



| Illustration | Opensourcehardware |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/O/Opensourcehardware.png) | ![illustration for Opensourcehardware](../../simpleicons-14/O/Opensourcehardware.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$OpensourcehardwareXs>`
- `<$OpensourcehardwareSm>`
- `<$OpensourcehardwareMd>`
- `<$OpensourcehardwareLg>`





## Opensourcehardware

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Opensourcehardware
include('simpleicons-14/O/Opensourcehardware')

' renders the element
Opensourcehardware('Opensourcehardware', 'Opensourcehardware', 'an optional tech label', 'an optional description')
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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Opensourcehardware
include('simpleicons-14/O/Opensourcehardware')

' renders the element
Opensourcehardware('Opensourcehardware', 'Opensourcehardware', 'an optional tech label', 'an optional description')
@enduml
```

