# Topcoder


```text
simpleicons/T/Topcoder
```

```text
include('simpleicons/T/Topcoder')
```



| Illustration | Topcoder |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/T/Topcoder.png) | ![illustration for Topcoder](../../simpleicons/T/Topcoder.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$TopcoderXs>`
- `<$TopcoderSm>`
- `<$TopcoderMd>`
- `<$TopcoderLg>`





## Topcoder

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Topcoder
include('simpleicons/T/Topcoder')

' renders the element
Topcoder('Topcoder', 'Topcoder', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Topcoder
include('simpleicons/T/Topcoder')

' renders the element
Topcoder('Topcoder', 'Topcoder', 'an optional tech label', 'an optional description')
@enduml
```

