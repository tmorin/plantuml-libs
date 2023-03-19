# Radio


```text
fontawesome-6/Solid/Radio
```

```text
include('fontawesome-6/Solid/Radio')
```



| Illustration | Radio |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/Radio.png) | ![illustration for Radio](../../fontawesome-6/Solid/Radio.Local.png) |



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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Radio
include('fontawesome-6/Solid/Radio')

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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Radio
include('fontawesome-6/Solid/Radio')

' renders the element
Radio('Radio', 'Radio', 'an optional tech label', 'an optional description')
@enduml
```

