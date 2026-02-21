# Adventofcode


```text
simpleicons-14/A/Adventofcode
```

```text
include('simpleicons-14/A/Adventofcode')
```



| Illustration | Adventofcode |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/A/Adventofcode.png) | ![illustration for Adventofcode](../../simpleicons-14/A/Adventofcode.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AdventofcodeXs>`
- `<$AdventofcodeSm>`
- `<$AdventofcodeMd>`
- `<$AdventofcodeLg>`





## Adventofcode

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Adventofcode
include('simpleicons-14/A/Adventofcode')

' renders the element
Adventofcode('Adventofcode', 'Adventofcode', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Adventofcode
include('simpleicons-14/A/Adventofcode')

' renders the element
Adventofcode('Adventofcode', 'Adventofcode', 'an optional tech label', 'an optional description')
@enduml
```

