# Twenty


```text
simpleicons/T/Twenty
```

```text
include('simpleicons/T/Twenty')
```



| Illustration | Twenty |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/T/Twenty.png) | ![illustration for Twenty](../../simpleicons/T/Twenty.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$TwentyXs>`
- `<$TwentySm>`
- `<$TwentyMd>`
- `<$TwentyLg>`





## Twenty

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Twenty
include('simpleicons/T/Twenty')

' renders the element
Twenty('Twenty', 'Twenty', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Twenty
include('simpleicons/T/Twenty')

' renders the element
Twenty('Twenty', 'Twenty', 'an optional tech label', 'an optional description')
@enduml
```

