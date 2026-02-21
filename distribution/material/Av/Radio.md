# Radio


```text
material/Av/Radio
```

```text
include('material/Av/Radio')
```



| Illustration | Radio |
| :---: | :---: |
| ![illustration for Illustration](../../material/Av/Radio.png) | ![illustration for Radio](../../material/Av/Radio.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$RadioXs>`
- `<$RadioSm>`
- `<$RadioMd>`
- `<$RadioLg>`





## Radio

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element Radio
include('material/Av/Radio')

' renders the element
Radio('Radio', 'Radio', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Radio
include('material/Av/Radio')

' renders the element
Radio('Radio', 'Radio', 'an optional tech label', 'an optional description')
@enduml
```

