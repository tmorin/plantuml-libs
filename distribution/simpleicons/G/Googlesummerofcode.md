# Googlesummerofcode


```text
simpleicons/G/Googlesummerofcode
```

```text
include('simpleicons/G/Googlesummerofcode')
```



| Illustration | Googlesummerofcode |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/G/Googlesummerofcode.png) | ![illustration for Googlesummerofcode](../../simpleicons/G/Googlesummerofcode.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$GooglesummerofcodeXs>`
- `<$GooglesummerofcodeSm>`
- `<$GooglesummerofcodeMd>`
- `<$GooglesummerofcodeLg>`





## Googlesummerofcode

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Googlesummerofcode
include('simpleicons/G/Googlesummerofcode')

' renders the element
Googlesummerofcode('Googlesummerofcode', 'Googlesummerofcode', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Googlesummerofcode
include('simpleicons/G/Googlesummerofcode')

' renders the element
Googlesummerofcode('Googlesummerofcode', 'Googlesummerofcode', 'an optional tech label', 'an optional description')
@enduml
```

