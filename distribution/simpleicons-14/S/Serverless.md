# Serverless


```text
simpleicons-14/S/Serverless
```

```text
include('simpleicons-14/S/Serverless')
```



| Illustration | Serverless |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/S/Serverless.png) | ![illustration for Serverless](../../simpleicons-14/S/Serverless.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ServerlessXs>`
- `<$ServerlessSm>`
- `<$ServerlessMd>`
- `<$ServerlessLg>`





## Serverless

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Serverless
include('simpleicons-14/S/Serverless')

' renders the element
Serverless('Serverless', 'Serverless', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Serverless
include('simpleicons-14/S/Serverless')

' renders the element
Serverless('Serverless', 'Serverless', 'an optional tech label', 'an optional description')
@enduml
```

