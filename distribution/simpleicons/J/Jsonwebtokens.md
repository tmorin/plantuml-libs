# Jsonwebtokens


```text
simpleicons/J/Jsonwebtokens
```

```text
include('simpleicons/J/Jsonwebtokens')
```



| Illustration | Jsonwebtokens |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/J/Jsonwebtokens.png) | ![illustration for Jsonwebtokens](../../simpleicons/J/Jsonwebtokens.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$JsonwebtokensXs>`
- `<$JsonwebtokensSm>`
- `<$JsonwebtokensMd>`
- `<$JsonwebtokensLg>`





## Jsonwebtokens

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Jsonwebtokens
include('simpleicons/J/Jsonwebtokens')

' renders the element
Jsonwebtokens('Jsonwebtokens', 'Jsonwebtokens', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Jsonwebtokens
include('simpleicons/J/Jsonwebtokens')

' renders the element
Jsonwebtokens('Jsonwebtokens', 'Jsonwebtokens', 'an optional tech label', 'an optional description')
@enduml
```

