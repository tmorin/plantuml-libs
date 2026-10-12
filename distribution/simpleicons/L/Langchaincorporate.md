# Langchaincorporate


```text
simpleicons/L/Langchaincorporate
```

```text
include('simpleicons/L/Langchaincorporate')
```



| Illustration | Langchaincorporate |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/L/Langchaincorporate.png) | ![illustration for Langchaincorporate](../../simpleicons/L/Langchaincorporate.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$LangchaincorporateXs>`
- `<$LangchaincorporateSm>`
- `<$LangchaincorporateMd>`
- `<$LangchaincorporateLg>`





## Langchaincorporate

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Langchaincorporate
include('simpleicons/L/Langchaincorporate')

' renders the element
Langchaincorporate('Langchaincorporate', 'Langchaincorporate', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Langchaincorporate
include('simpleicons/L/Langchaincorporate')

' renders the element
Langchaincorporate('Langchaincorporate', 'Langchaincorporate', 'an optional tech label', 'an optional description')
@enduml
```

