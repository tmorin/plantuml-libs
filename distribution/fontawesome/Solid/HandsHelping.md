# HandsHelping


```text
fontawesome/Solid/HandsHelping
```

```text
include('fontawesome/Solid/HandsHelping')
```



| Illustration | HandsHelping |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/HandsHelping.png) | ![illustration for HandsHelping](../../fontawesome/Solid/HandsHelping.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$HandsHelpingXs>`
- `<$HandsHelpingSm>`
- `<$HandsHelpingMd>`
- `<$HandsHelpingLg>`





## HandsHelping

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element HandsHelping
include('fontawesome/Solid/HandsHelping')

' renders the element
HandsHelping('HandsHelping', 'Hands Helping', 'an optional tech label', 'an optional description')
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
include('fontawesome/bootstrap')

' loads the Item which embeds the element HandsHelping
include('fontawesome/Solid/HandsHelping')

' renders the element
HandsHelping('HandsHelping', 'Hands Helping', 'an optional tech label', 'an optional description')
@enduml
```

