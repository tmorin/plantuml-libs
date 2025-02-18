# Trustpilot


```text
simpleicons-14/T/Trustpilot
```

```text
include('simpleicons-14/T/Trustpilot')
```



| Illustration | Trustpilot |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/T/Trustpilot.png) | ![illustration for Trustpilot](../../simpleicons-14/T/Trustpilot.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$TrustpilotXs>`
- `<$TrustpilotSm>`
- `<$TrustpilotMd>`
- `<$TrustpilotLg>`





## Trustpilot

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Trustpilot
include('simpleicons-14/T/Trustpilot')

' renders the element
Trustpilot('Trustpilot', 'Trustpilot', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Trustpilot
include('simpleicons-14/T/Trustpilot')

' renders the element
Trustpilot('Trustpilot', 'Trustpilot', 'an optional tech label', 'an optional description')
@enduml
```

