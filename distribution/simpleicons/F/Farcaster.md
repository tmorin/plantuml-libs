# Farcaster


```text
simpleicons/F/Farcaster
```

```text
include('simpleicons/F/Farcaster')
```



| Illustration | Farcaster |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/F/Farcaster.png) | ![illustration for Farcaster](../../simpleicons/F/Farcaster.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$FarcasterXs>`
- `<$FarcasterSm>`
- `<$FarcasterMd>`
- `<$FarcasterLg>`





## Farcaster

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Farcaster
include('simpleicons/F/Farcaster')

' renders the element
Farcaster('Farcaster', 'Farcaster', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Farcaster
include('simpleicons/F/Farcaster')

' renders the element
Farcaster('Farcaster', 'Farcaster', 'an optional tech label', 'an optional description')
@enduml
```

