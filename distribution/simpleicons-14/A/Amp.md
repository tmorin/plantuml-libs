# Amp


```text
simpleicons-14/A/Amp
```

```text
include('simpleicons-14/A/Amp')
```



| Illustration | Amp |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/A/Amp.png) | ![illustration for Amp](../../simpleicons-14/A/Amp.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AmpXs>`
- `<$AmpSm>`
- `<$AmpMd>`
- `<$AmpLg>`





## Amp

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Amp
include('simpleicons-14/A/Amp')

' renders the element
Amp('Amp', 'Amp', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Amp
include('simpleicons-14/A/Amp')

' renders the element
Amp('Amp', 'Amp', 'an optional tech label', 'an optional description')
@enduml
```

