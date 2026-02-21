# Apachepdfbox


```text
simpleicons/A/Apachepdfbox
```

```text
include('simpleicons/A/Apachepdfbox')
```



| Illustration | Apachepdfbox |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/A/Apachepdfbox.png) | ![illustration for Apachepdfbox](../../simpleicons/A/Apachepdfbox.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ApachepdfboxXs>`
- `<$ApachepdfboxSm>`
- `<$ApachepdfboxMd>`
- `<$ApachepdfboxLg>`





## Apachepdfbox

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Apachepdfbox
include('simpleicons/A/Apachepdfbox')

' renders the element
Apachepdfbox('Apachepdfbox', 'Apachepdfbox', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Apachepdfbox
include('simpleicons/A/Apachepdfbox')

' renders the element
Apachepdfbox('Apachepdfbox', 'Apachepdfbox', 'an optional tech label', 'an optional description')
@enduml
```

