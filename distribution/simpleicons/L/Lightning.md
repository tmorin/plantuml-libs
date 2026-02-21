# Lightning


```text
simpleicons/L/Lightning
```

```text
include('simpleicons/L/Lightning')
```



| Illustration | Lightning |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/L/Lightning.png) | ![illustration for Lightning](../../simpleicons/L/Lightning.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$LightningXs>`
- `<$LightningSm>`
- `<$LightningMd>`
- `<$LightningLg>`





## Lightning

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Lightning
include('simpleicons/L/Lightning')

' renders the element
Lightning('Lightning', 'Lightning', 'an optional tech label', 'an optional description')
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
include('simpleicons/bootstrap')

' loads the Item which embeds the element Lightning
include('simpleicons/L/Lightning')

' renders the element
Lightning('Lightning', 'Lightning', 'an optional tech label', 'an optional description')
@enduml
```

