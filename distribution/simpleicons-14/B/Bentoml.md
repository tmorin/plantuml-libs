# Bentoml


```text
simpleicons-14/B/Bentoml
```

```text
include('simpleicons-14/B/Bentoml')
```



| Illustration | Bentoml |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/B/Bentoml.png) | ![illustration for Bentoml](../../simpleicons-14/B/Bentoml.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$BentomlXs>`
- `<$BentomlSm>`
- `<$BentomlMd>`
- `<$BentomlLg>`





## Bentoml

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Bentoml
include('simpleicons-14/B/Bentoml')

' renders the element
Bentoml('Bentoml', 'Bentoml', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Bentoml
include('simpleicons-14/B/Bentoml')

' renders the element
Bentoml('Bentoml', 'Bentoml', 'an optional tech label', 'an optional description')
@enduml
```

