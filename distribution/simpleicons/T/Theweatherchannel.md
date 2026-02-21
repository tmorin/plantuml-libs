# Theweatherchannel


```text
simpleicons/T/Theweatherchannel
```

```text
include('simpleicons/T/Theweatherchannel')
```



| Illustration | Theweatherchannel |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/T/Theweatherchannel.png) | ![illustration for Theweatherchannel](../../simpleicons/T/Theweatherchannel.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$TheweatherchannelXs>`
- `<$TheweatherchannelSm>`
- `<$TheweatherchannelMd>`
- `<$TheweatherchannelLg>`





## Theweatherchannel

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Theweatherchannel
include('simpleicons/T/Theweatherchannel')

' renders the element
Theweatherchannel('Theweatherchannel', 'Theweatherchannel', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Theweatherchannel
include('simpleicons/T/Theweatherchannel')

' renders the element
Theweatherchannel('Theweatherchannel', 'Theweatherchannel', 'an optional tech label', 'an optional description')
@enduml
```

