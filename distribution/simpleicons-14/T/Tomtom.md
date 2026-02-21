# Tomtom


```text
simpleicons-14/T/Tomtom
```

```text
include('simpleicons-14/T/Tomtom')
```



| Illustration | Tomtom |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/T/Tomtom.png) | ![illustration for Tomtom](../../simpleicons-14/T/Tomtom.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$TomtomXs>`
- `<$TomtomSm>`
- `<$TomtomMd>`
- `<$TomtomLg>`





## Tomtom

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Tomtom
include('simpleicons-14/T/Tomtom')

' renders the element
Tomtom('Tomtom', 'Tomtom', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Tomtom
include('simpleicons-14/T/Tomtom')

' renders the element
Tomtom('Tomtom', 'Tomtom', 'an optional tech label', 'an optional description')
@enduml
```

