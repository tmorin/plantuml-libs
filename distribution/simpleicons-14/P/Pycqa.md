# Pycqa


```text
simpleicons-14/P/Pycqa
```

```text
include('simpleicons-14/P/Pycqa')
```



| Illustration | Pycqa |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/P/Pycqa.png) | ![illustration for Pycqa](../../simpleicons-14/P/Pycqa.Local.png) |



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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Pycqa
include('simpleicons-14/P/Pycqa')

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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Pycqa
include('simpleicons-14/P/Pycqa')

' renders the element
Pycqa('Pycqa', 'Pycqa', 'an optional tech label', 'an optional description')
@enduml
```

