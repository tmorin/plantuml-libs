# Xing


```text
simpleicons/X/Xing
```

```text
include('simpleicons/X/Xing')
```



| Illustration | Xing |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/X/Xing.png) | ![illustration for Xing](../../simpleicons/X/Xing.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$XingXs>`
- `<$XingSm>`
- `<$XingMd>`
- `<$XingLg>`





## Xing

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Xing
include('simpleicons/X/Xing')

' renders the element
Xing('Xing', 'Xing', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Xing
include('simpleicons/X/Xing')

' renders the element
Xing('Xing', 'Xing', 'an optional tech label', 'an optional description')
@enduml
```

