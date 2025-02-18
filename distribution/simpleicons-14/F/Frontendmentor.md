# Frontendmentor


```text
simpleicons-14/F/Frontendmentor
```

```text
include('simpleicons-14/F/Frontendmentor')
```



| Illustration | Frontendmentor |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/F/Frontendmentor.png) | ![illustration for Frontendmentor](../../simpleicons-14/F/Frontendmentor.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$FrontendmentorXs>`
- `<$FrontendmentorSm>`
- `<$FrontendmentorMd>`
- `<$FrontendmentorLg>`





## Frontendmentor

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Frontendmentor
include('simpleicons-14/F/Frontendmentor')

' renders the element
Frontendmentor('Frontendmentor', 'Frontendmentor', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Frontendmentor
include('simpleicons-14/F/Frontendmentor')

' renders the element
Frontendmentor('Frontendmentor', 'Frontendmentor', 'an optional tech label', 'an optional description')
@enduml
```

