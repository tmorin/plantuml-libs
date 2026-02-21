# Lintcode


```text
simpleicons/L/Lintcode
```

```text
include('simpleicons/L/Lintcode')
```



| Illustration | Lintcode |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/L/Lintcode.png) | ![illustration for Lintcode](../../simpleicons/L/Lintcode.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$LintcodeXs>`
- `<$LintcodeSm>`
- `<$LintcodeMd>`
- `<$LintcodeLg>`





## Lintcode

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Lintcode
include('simpleicons/L/Lintcode')

' renders the element
Lintcode('Lintcode', 'Lintcode', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Lintcode
include('simpleicons/L/Lintcode')

' renders the element
Lintcode('Lintcode', 'Lintcode', 'an optional tech label', 'an optional description')
@enduml
```

