# Pythonanywhere


```text
simpleicons/P/Pythonanywhere
```

```text
include('simpleicons/P/Pythonanywhere')
```



| Illustration | Pythonanywhere |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/P/Pythonanywhere.png) | ![illustration for Pythonanywhere](../../simpleicons/P/Pythonanywhere.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PythonanywhereXs>`
- `<$PythonanywhereSm>`
- `<$PythonanywhereMd>`
- `<$PythonanywhereLg>`





## Pythonanywhere

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Pythonanywhere
include('simpleicons/P/Pythonanywhere')

' renders the element
Pythonanywhere('Pythonanywhere', 'Pythonanywhere', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Pythonanywhere
include('simpleicons/P/Pythonanywhere')

' renders the element
Pythonanywhere('Pythonanywhere', 'Pythonanywhere', 'an optional tech label', 'an optional description')
@enduml
```

