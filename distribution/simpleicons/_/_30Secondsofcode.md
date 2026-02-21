# _30Secondsofcode


```text
simpleicons/_/_30Secondsofcode
```

```text
include('simpleicons/_/_30Secondsofcode')
```



| Illustration | _30Secondsofcode |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/_/_30Secondsofcode.png) | ![illustration for _30Secondsofcode](../../simpleicons/_/_30Secondsofcode.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$_30SecondsofcodeXs>`
- `<$_30SecondsofcodeSm>`
- `<$_30SecondsofcodeMd>`
- `<$_30SecondsofcodeLg>`





## _30Secondsofcode

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element _30Secondsofcode
include('simpleicons/_/_30Secondsofcode')

' renders the element
_30Secondsofcode('30secondsofcode', '30secondsofcode', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element _30Secondsofcode
include('simpleicons/_/_30Secondsofcode')

' renders the element
_30Secondsofcode('30secondsofcode', '30secondsofcode', 'an optional tech label', 'an optional description')
@enduml
```

