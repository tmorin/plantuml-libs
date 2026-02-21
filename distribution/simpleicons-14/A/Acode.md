# Acode


```text
simpleicons-14/A/Acode
```

```text
include('simpleicons-14/A/Acode')
```



| Illustration | Acode |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/A/Acode.png) | ![illustration for Acode](../../simpleicons-14/A/Acode.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AcodeXs>`
- `<$AcodeSm>`
- `<$AcodeMd>`
- `<$AcodeLg>`





## Acode

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Acode
include('simpleicons-14/A/Acode')

' renders the element
Acode('Acode', 'Acode', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Acode
include('simpleicons-14/A/Acode')

' renders the element
Acode('Acode', 'Acode', 'an optional tech label', 'an optional description')
@enduml
```

