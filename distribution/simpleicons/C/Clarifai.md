# Clarifai


```text
simpleicons/C/Clarifai
```

```text
include('simpleicons/C/Clarifai')
```



| Illustration | Clarifai |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/C/Clarifai.png) | ![illustration for Clarifai](../../simpleicons/C/Clarifai.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ClarifaiXs>`
- `<$ClarifaiSm>`
- `<$ClarifaiMd>`
- `<$ClarifaiLg>`





## Clarifai

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Clarifai
include('simpleicons/C/Clarifai')

' renders the element
Clarifai('Clarifai', 'Clarifai', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Clarifai
include('simpleicons/C/Clarifai')

' renders the element
Clarifai('Clarifai', 'Clarifai', 'an optional tech label', 'an optional description')
@enduml
```

