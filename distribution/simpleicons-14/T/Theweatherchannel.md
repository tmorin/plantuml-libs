# Theweatherchannel


```text
simpleicons-14/T/Theweatherchannel
```

```text
include('simpleicons-14/T/Theweatherchannel')
```



| Illustration | Theweatherchannel |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/T/Theweatherchannel.png) | ![illustration for Theweatherchannel](../../simpleicons-14/T/Theweatherchannel.Local.png) |



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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Theweatherchannel
include('simpleicons-14/T/Theweatherchannel')

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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Theweatherchannel
include('simpleicons-14/T/Theweatherchannel')

' renders the element
Theweatherchannel('Theweatherchannel', 'Theweatherchannel', 'an optional tech label', 'an optional description')
@enduml
```

