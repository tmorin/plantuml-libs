# Drupal


```text
fontawesome/Brands/Drupal
```

```text
include('fontawesome/Brands/Drupal')
```



| Illustration | Drupal |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Brands/Drupal.png) | ![illustration for Drupal](../../fontawesome/Brands/Drupal.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$DrupalXs>`
- `<$DrupalSm>`
- `<$DrupalMd>`
- `<$DrupalLg>`





## Drupal

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Drupal
include('fontawesome/Brands/Drupal')

' renders the element
Drupal('Drupal', 'Drupal', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Drupal
include('fontawesome/Brands/Drupal')

' renders the element
Drupal('Drupal', 'Drupal', 'an optional tech label', 'an optional description')
@enduml
```

