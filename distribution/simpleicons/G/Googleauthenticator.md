# Googleauthenticator


```text
simpleicons/G/Googleauthenticator
```

```text
include('simpleicons/G/Googleauthenticator')
```



| Illustration | Googleauthenticator |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/G/Googleauthenticator.png) | ![illustration for Googleauthenticator](../../simpleicons/G/Googleauthenticator.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$GoogleauthenticatorXs>`
- `<$GoogleauthenticatorSm>`
- `<$GoogleauthenticatorMd>`
- `<$GoogleauthenticatorLg>`





## Googleauthenticator

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Googleauthenticator
include('simpleicons/G/Googleauthenticator')

' renders the element
Googleauthenticator('Googleauthenticator', 'Googleauthenticator', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Googleauthenticator
include('simpleicons/G/Googleauthenticator')

' renders the element
Googleauthenticator('Googleauthenticator', 'Googleauthenticator', 'an optional tech label', 'an optional description')
@enduml
```

