# Vodafone


```text
simpleicons/V/Vodafone
```

```text
include('simpleicons/V/Vodafone')
```



| Illustration | Vodafone |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/V/Vodafone.png) | ![illustration for Vodafone](../../simpleicons/V/Vodafone.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$VodafoneXs>`
- `<$VodafoneSm>`
- `<$VodafoneMd>`
- `<$VodafoneLg>`





## Vodafone

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Vodafone
include('simpleicons/V/Vodafone')

' renders the element
Vodafone('Vodafone', 'Vodafone', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Vodafone
include('simpleicons/V/Vodafone')

' renders the element
Vodafone('Vodafone', 'Vodafone', 'an optional tech label', 'an optional description')
@enduml
```

