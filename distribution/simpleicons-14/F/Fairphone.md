# Fairphone


```text
simpleicons-14/F/Fairphone
```

```text
include('simpleicons-14/F/Fairphone')
```



| Illustration | Fairphone |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/F/Fairphone.png) | ![illustration for Fairphone](../../simpleicons-14/F/Fairphone.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$FairphoneXs>`
- `<$FairphoneSm>`
- `<$FairphoneMd>`
- `<$FairphoneLg>`





## Fairphone

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Fairphone
include('simpleicons-14/F/Fairphone')

' renders the element
Fairphone('Fairphone', 'Fairphone', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Fairphone
include('simpleicons-14/F/Fairphone')

' renders the element
Fairphone('Fairphone', 'Fairphone', 'an optional tech label', 'an optional description')
@enduml
```

