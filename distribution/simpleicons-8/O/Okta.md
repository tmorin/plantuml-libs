# Okta


```text
simpleicons-8/O/Okta
```

```text
include('simpleicons-8/O/Okta')
```



| Illustration | Okta |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/O/Okta.png) | ![illustration for Okta](../../simpleicons-8/O/Okta.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$OktaXs>`
- `<$OktaSm>`
- `<$OktaMd>`
- `<$OktaLg>`





## Okta

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Okta
include('simpleicons-8/O/Okta')

' renders the element
Okta('Okta', 'Okta', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Okta
include('simpleicons-8/O/Okta')

' renders the element
Okta('Okta', 'Okta', 'an optional tech label', 'an optional description')
@enduml
```

