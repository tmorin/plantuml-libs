# Yoast


```text
simpleicons/Y/Yoast
```

```text
include('simpleicons/Y/Yoast')
```



| Illustration | Yoast |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/Y/Yoast.png) | ![illustration for Yoast](../../simpleicons/Y/Yoast.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$YoastXs>`
- `<$YoastSm>`
- `<$YoastMd>`
- `<$YoastLg>`





## Yoast

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Yoast
include('simpleicons/Y/Yoast')

' renders the element
Yoast('Yoast', 'Yoast', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Yoast
include('simpleicons/Y/Yoast')

' renders the element
Yoast('Yoast', 'Yoast', 'an optional tech label', 'an optional description')
@enduml
```

