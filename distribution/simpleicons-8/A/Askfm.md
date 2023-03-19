# Askfm


```text
simpleicons-8/A/Askfm
```

```text
include('simpleicons-8/A/Askfm')
```



| Illustration | Askfm |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/A/Askfm.png) | ![illustration for Askfm](../../simpleicons-8/A/Askfm.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AskfmXs>`
- `<$AskfmSm>`
- `<$AskfmMd>`
- `<$AskfmLg>`





## Askfm

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Askfm
include('simpleicons-8/A/Askfm')

' renders the element
Askfm('Askfm', 'Askfm', 'an optional tech label', 'an optional description')
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
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Askfm
include('simpleicons-8/A/Askfm')

' renders the element
Askfm('Askfm', 'Askfm', 'an optional tech label', 'an optional description')
@enduml
```

