# Vonage


```text
simpleicons-8/V/Vonage
```

```text
include('simpleicons-8/V/Vonage')
```



| Illustration | Vonage |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/V/Vonage.png) | ![illustration for Vonage](../../simpleicons-8/V/Vonage.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$VonageXs>`
- `<$VonageSm>`
- `<$VonageMd>`
- `<$VonageLg>`





## Vonage

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Vonage
include('simpleicons-8/V/Vonage')

' renders the element
Vonage('Vonage', 'Vonage', 'an optional tech label', 'an optional description')
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
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Vonage
include('simpleicons-8/V/Vonage')

' renders the element
Vonage('Vonage', 'Vonage', 'an optional tech label', 'an optional description')
@enduml
```

