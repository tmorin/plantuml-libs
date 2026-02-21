# Googleauthenticator


```text
simpleicons-14/G/Googleauthenticator
```

```text
include('simpleicons-14/G/Googleauthenticator')
```



| Illustration | Googleauthenticator |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/G/Googleauthenticator.png) | ![illustration for Googleauthenticator](../../simpleicons-14/G/Googleauthenticator.Local.png) |



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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Googleauthenticator
include('simpleicons-14/G/Googleauthenticator')

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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Googleauthenticator
include('simpleicons-14/G/Googleauthenticator')

' renders the element
Googleauthenticator('Googleauthenticator', 'Googleauthenticator', 'an optional tech label', 'an optional description')
@enduml
```

