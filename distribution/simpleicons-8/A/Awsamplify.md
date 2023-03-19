# Awsamplify


```text
simpleicons-8/A/Awsamplify
```

```text
include('simpleicons-8/A/Awsamplify')
```



| Illustration | Awsamplify |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/A/Awsamplify.png) | ![illustration for Awsamplify](../../simpleicons-8/A/Awsamplify.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AwsamplifyXs>`
- `<$AwsamplifySm>`
- `<$AwsamplifyMd>`
- `<$AwsamplifyLg>`





## Awsamplify

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Awsamplify
include('simpleicons-8/A/Awsamplify')

' renders the element
Awsamplify('Awsamplify', 'Awsamplify', 'an optional tech label', 'an optional description')
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
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Awsamplify
include('simpleicons-8/A/Awsamplify')

' renders the element
Awsamplify('Awsamplify', 'Awsamplify', 'an optional tech label', 'an optional description')
@enduml
```

