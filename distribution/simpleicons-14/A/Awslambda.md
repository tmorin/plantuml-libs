# Awslambda


```text
simpleicons-14/A/Awslambda
```

```text
include('simpleicons-14/A/Awslambda')
```



| Illustration | Awslambda |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/A/Awslambda.png) | ![illustration for Awslambda](../../simpleicons-14/A/Awslambda.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AwslambdaXs>`
- `<$AwslambdaSm>`
- `<$AwslambdaMd>`
- `<$AwslambdaLg>`





## Awslambda

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Awslambda
include('simpleicons-14/A/Awslambda')

' renders the element
Awslambda('Awslambda', 'Awslambda', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Awslambda
include('simpleicons-14/A/Awslambda')

' renders the element
Awslambda('Awslambda', 'Awslambda', 'an optional tech label', 'an optional description')
@enduml
```

