# Linphone


```text
simpleicons-14/L/Linphone
```

```text
include('simpleicons-14/L/Linphone')
```



| Illustration | Linphone |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/L/Linphone.png) | ![illustration for Linphone](../../simpleicons-14/L/Linphone.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$LinphoneXs>`
- `<$LinphoneSm>`
- `<$LinphoneMd>`
- `<$LinphoneLg>`





## Linphone

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Linphone
include('simpleicons-14/L/Linphone')

' renders the element
Linphone('Linphone', 'Linphone', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Linphone
include('simpleicons-14/L/Linphone')

' renders the element
Linphone('Linphone', 'Linphone', 'an optional tech label', 'an optional description')
@enduml
```

