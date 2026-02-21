# Pycqa


```text
simpleicons/P/Pycqa
```

```text
include('simpleicons/P/Pycqa')
```



| Illustration | Pycqa |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/P/Pycqa.png) | ![illustration for Pycqa](../../simpleicons/P/Pycqa.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PycqaXs>`
- `<$PycqaSm>`
- `<$PycqaMd>`
- `<$PycqaLg>`





## Pycqa

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Pycqa
include('simpleicons/P/Pycqa')

' renders the element
Pycqa('Pycqa', 'Pycqa', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Pycqa
include('simpleicons/P/Pycqa')

' renders the element
Pycqa('Pycqa', 'Pycqa', 'an optional tech label', 'an optional description')
@enduml
```

