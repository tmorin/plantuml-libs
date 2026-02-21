# Languagetool


```text
simpleicons-14/L/Languagetool
```

```text
include('simpleicons-14/L/Languagetool')
```



| Illustration | Languagetool |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/L/Languagetool.png) | ![illustration for Languagetool](../../simpleicons-14/L/Languagetool.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$LanguagetoolXs>`
- `<$LanguagetoolSm>`
- `<$LanguagetoolMd>`
- `<$LanguagetoolLg>`





## Languagetool

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Languagetool
include('simpleicons-14/L/Languagetool')

' renders the element
Languagetool('Languagetool', 'Languagetool', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Languagetool
include('simpleicons-14/L/Languagetool')

' renders the element
Languagetool('Languagetool', 'Languagetool', 'an optional tech label', 'an optional description')
@enduml
```

