# SystemUpdateAlt


```text
material/Action/SystemUpdateAlt
```

```text
include('material/Action/SystemUpdateAlt')
```



| Illustration | SystemUpdateAlt |
| :---: | :---: |
| ![illustration for Illustration](../../material/Action/SystemUpdateAlt.png) | ![illustration for SystemUpdateAlt](../../material/Action/SystemUpdateAlt.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SystemUpdateAltXs>`
- `<$SystemUpdateAltSm>`
- `<$SystemUpdateAltMd>`
- `<$SystemUpdateAltLg>`





## SystemUpdateAlt

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element SystemUpdateAlt
include('material/Action/SystemUpdateAlt')

' renders the element
SystemUpdateAlt('SystemUpdateAlt', 'System Update Alt', 'an optional tech label', 'an optional description')
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
include('material/bootstrap')

' loads the Item which embeds the element SystemUpdateAlt
include('material/Action/SystemUpdateAlt')

' renders the element
SystemUpdateAlt('SystemUpdateAlt', 'System Update Alt', 'an optional tech label', 'an optional description')
@enduml
```

